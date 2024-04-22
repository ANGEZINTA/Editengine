import axios, { AxiosInstance,  AxiosResponse, AxiosError, AxiosRequestConfig } from "axios";
import store from "@/store";

class Api {
    public axios: AxiosInstance;
    public engine = process.env.VUE_APP_ENGINE_URL;
    public core:string = process.env.VUE_APP_CORE_URL;
refreshAttempt=0;
    constructor() {
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        const baseUrl = location.origin;
        // console.log(baseUrl)
        this.axios = axios.create({
            baseURL: "/",
            headers,
            data: {},
            transformRequest: [(data) => JSON.stringify(data)], // Convertit automatiquement les données en JSON
        });
        // this.axios.defaults.withCredentials = true
        this.addLoadingInterceptor(this.axios);
    }

    addLoadingInterceptor(client: AxiosInstance) {
        client.interceptors.request.use(
            (config: any) => {
                config.headers.Zone = 'wiassur';
                    
                if (
                    store.state.userToken &&
                    store.state.userToken.length &&
                    (!config.params || !config.params.hasOwnProperty("noAuth"))
                ) {
                    config.headers.Authorization = `Bearer ${store.state.userToken}`;
                }
                    
                return config;
            },
            (error: AxiosError) => {
                console.log("REQUEST ERROR");
                console.log(error);
                if (error.response && error.response.status === 401) {
                    console.log("access denied");
                }
            }
        );

        client.interceptors.response.use(
            (response: any) => {
                if (
                    response.data.hasOwnProperty("status") &&
                    response.data.hasOwnProperty("message")
                ) {
                    if (response.data.status === "error") {

                        let keepAlive = false;
                        if (response.data.keepAlive) {
                            keepAlive = true
                        }

                    } else if (response.data.status === "unknow") {
                        
                    }
                }
                // store.commit('stopLoading');
                // Do something with response data
                return response;
            },
            async (error: any) => {
                store.commit("stopLoading");
                // console.log('RESPONSE ERROR');
                // console.log(error.response);

                if (error.response && error.response.status === 401) {
                    console.log(error.response.data.message);
                    if (error.response.data.message === "Invalid credentials.") {
                        
                        return Promise.reject(error);
                    }
                    // console.log(error.config);
                    if (this.refreshAttempt > 5) {
                        console.log('logout')
                        // auth.logout();
                        return;
                    }
                    this.refreshAttempt++;
                    const refreshSuccess = await this.refreshToken();
                    if (!refreshSuccess && this.refreshAttempt < 5) {
                        console.log("refresh failed");
                        //this.logout();
                        // Swal.fire({
                        //     title: Vue.prototype.Ktrans('Session_expired'),
                        //     text: Vue.prototype.Ktrans('Sorry_you_have_been_disconnected'),
                        //     icon: "warning",
                        //     timer: 5000
                        // });
                    } else {
                        console.log("refresh succeed");
                        // this.refreshAttempt = 0;
                        return this.axios.request(error.config);
                    }
                    // } else {
                    //     this.logout();
                    // }
                    // console.log('access denied');
                    return Promise.reject(error);
                }
                if (error.response) {
                    if (error.response.data) {
                        const data = error.response.data;
                        if (data.hasOwnProperty("detail")) {
                        } else if (data.hasOwnProperty("message")) {
                        } else {
                        }
                    }
                }
                // return Promise.reject(error);
            }
        );
    }

    async refreshToken() {
        try {
            console.log('refresh ' + this.refreshAttempt)
            const ut = localStorage.getItem("userType");
            let endpoint = "token/refresh";
            console.log(ut);
            if (ut === "partner") {
                endpoint = "partner/" + endpoint;
            }
            // const result = await this.post(
            //     this.auth,
            //     endpoint,
            //     {refreshToken: auth.loadData().refreshToken},
            //     {noAuth: true}
            // );
            // if (result) {
            //     const data = result.data;
            //     store.state.userToken = data.token;
            //     store.state.userRefreshToken = data.refreshToken;

            //     localStorage.setItem("mercureToken", data.mercure);
            //     localStorage.setItem("refreshToken", data.refreshToken);
            //     localStorage.setItem("userToken", data.token);
            //     return true;
            // }
            return false;
        } catch (error: any) {
            // console.log('---------->refresh error')
            // console.log(error);
            if (error.response.status === 401) {
                // new Popup('danger', Vue.prototype.Ktrans('invalid_credentials'),
                //     Vue.prototype.Ktrans('bad_username_or_password'),
                //     'fad user-slash', '', []);
            }
            return false;
        }
    }
    async get(  service: string, endpoint: string,config = {}): Promise<any | null> {
        return await this.axios.get(service + endpoint, config);
    }

    async post(service: string, endpoint: string, data: any, config?: any) {
        
        return this.axios.post(service + endpoint, data, config);

    }
    async delete(service: string, endpoint: string, config?: any) {
        return this.axios.delete(service + endpoint, config);
    }
    

    loadEngine(slug: string, version: string = "") {
        return new Promise(async (resolve, reject) => {
            // Your code for loading engine
        });
    }
}

export const api = new Api();

