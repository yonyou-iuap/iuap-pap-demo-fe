import axios from "axios";

let x_xsrf_token = '',
    random_num = Math.random();

export default (url, options) => {
    let params = Object.assign({}, options.param, options.method.toLowerCase() == 'get' ? {
        r: Math.random()
    } : {});
    return axios({
        method: options.method,
        url: url,
        data: options.data,
        headers: { 
            'X-Requested-With': 'XMLHttpRequest',
            'random-num' : random_num,
            'x-xsrf-token' : x_xsrf_token
        },
        params,

    }).then(function(res){
        // console.log('axios res', res);
        let inner_x_xsrf_token = res.headers['x-xsrf-token'];//added by yany
        if(inner_x_xsrf_token){
            x_xsrf_token = inner_x_xsrf_token;
        }

        return new Promise((resolve, reject) => {
            resolve(res);
        })
    }).catch(function (err) {
        console.log(err);
        let res = err.response;
        if (res) {
            let { status, data: { msg } } = res;

            switch (status) {
                case 401:
                    console.log("RBAC鉴权失败!" + msg);
                    return Promise.resolve(res);
                case 306:
                    window.top.location.href = '/wbalone/pages/login/login.html';
                    break;
                default:
            }

        }

    });
}
