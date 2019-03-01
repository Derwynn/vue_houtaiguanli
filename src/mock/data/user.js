import Mock from 'mockjs';

const LoginUsers = [
  {
    id: 1,
    username: 'admin',
    password: '123456',
    avatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
    name: '张某某'
  }
];

const Users = [];

for (let i = 0; i < 86; i++) {
  Users.push(Mock.mock({
    id: Mock.Random.guid(),
    suoshu: Mock.Random.string(2, 10),
    bumen: Mock.Random.cname(),
    zhiwei: Mock.Random.cname(),
    xingming: Mock.Random.cname(),
    shenfenzheng: Mock.Random.zip(),
    jichu: Mock.Random.cname(),
    shebao: Mock.Random.cname(),
    gongjijin: Mock.Random.cname(),
    gongzi: Mock.Random.cname(),
    kaihu: Mock.Random.cname(),
    yuangong: Mock.Random.cname(),
    
    'age|18-60': 1,
    'siling|18-60': 1,

    ruzhi: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }));
}

export { Users };
