import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers, Users } from './data/user';
let _Users = Users;

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);

    // mock success request
    mock.onGet('/success').reply(200, {
      msg: 'success'
    });

    // mock error request
    mock.onGet('/error').reply(500, {
      msg: 'failure'
    });

    //登录
    mock.onPost('/login').reply(config => {
      let {username, password} = JSON.parse(config.data);
      return new Promise((resolve, reject) => {
        let user = null;
        setTimeout(() => {
          let hasUser = LoginUsers.some(u => {
            if (u.username === username && u.password === password) {
              user = JSON.parse(JSON.stringify(u));
              user.password = undefined;
              return true;
            }
          });

          if (hasUser) {
            resolve([200, { code: 200, msg: '请求成功', user }]);
          } else {
            resolve([200, { code: 500, msg: '账号或密码错误' }]);
          }
        }, 1000);
      });
    });

    //获取用户列表
    mock.onGet('/user/list').reply(config => {
      let {name} = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //获取用户列表（分页）
    mock.onGet('/user/listpage').reply(config => {
      let {page, name,xingming,suoshu,zhiwei,gonghao} = config.params;
      let mockUsers = _Users.filter(user => {
        if (name && user.name.indexOf(name) == -1) return false;
        if (xingming && user.xingming.indexOf(xingming) == -1) return false;
        if (suoshu && user.suoshu.indexOf(suoshu) == -1) return false;
        if (zhiwei && user.zhiwei.indexOf(zhiwei) == -1) return false;
        if (gonghao && user.gonghao.indexOf(gonghao) == -1) return false;
        return true;
      });
      let total = mockUsers.length;
      mockUsers = mockUsers.filter((u, index) => index < 20 * page && index >= 20 * (page - 1));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            total: total,
            users: mockUsers
          }]);
        }, 1000);
      });
    });

    //删除用户
    mock.onGet('/user/remove').reply(config => {
      let { id } = config.params;
      _Users = _Users.filter(u => u.id !== id);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //批量删除用户
    mock.onGet('/user/batchremove').reply(config => {
      let { ids } = config.params;
      ids = ids.split(',');
      _Users = _Users.filter(u => !ids.includes(u.id));
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '删除成功'
          }]);
        }, 500);
      });
    });

    //编辑用户
    mock.onGet('/user/edit').reply(config => {
      let { id, suoshu,bumen,zhiwei,xingming,age,ruzhi,shenfenzheng,sex,siling,jichu,shebao,gongjijin,gongzi,kaihu,yuangong } = config.params;
      _Users.some(u => {
        if (u.id === id) {
          u.suoshu = suoshu;
          u.bumen = bumen;
          u.age = age;
          u.zhiwei = zhiwei;
          u.sex = sex;
          u.xingming = xingming;
          u.ruzhi = ruzhi;
          u.shenfenzheng = shenfenzheng;
          u.siling = siling;
          u.jichu = jichu;
          u.shebao = shebao;
          u.gongjijin = gongjijin;
          u.gongzi = gongzi;
          u.kaihu = kaihu;
          u.yuangong = yuangong;
          return true;
        }
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '编辑成功'
          }]);
        }, 500);
      });
    });

    //新增用户
    mock.onGet('/user/add').reply(config => {
      let { suoshu,bumen,zhiwei,xingming,age,ruzhi,shenfenzheng,sex,siling,jichu,shebao,gongjijin,gongzi,kaihu,yuangong} = config.params;
      _Users.push({
        suoshu:suoshu,
        bumen:bumen,
        zhiwei:zhiwei,
        xingming:xingming,
        sex: sex,
        shenfenzheng:shenfenzheng,
        age: age,
        ruzhi:ruzhi,
        siling:siling,
        jichu:jichu,
        shebao:shebao,
        gongjijin:gongjijin,
        gongzi:gongzi,
        kaihu:kaihu,
        yuangong:yuangong
       
        
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            code: 200,
            msg: '新增成功'
          }]);
        }, 500);
      });
    });

  }
};