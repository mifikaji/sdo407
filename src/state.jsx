const user={
    name: "Тихон",
    lastname:"Вятский",
    id:"1",
    about: "Кофе 3в1",
    avatar:"https://sun9-23.userapi.com/impg/xYDfigKv8g3Cybm5Jyn2R-1L-OXUVWskKBtYKA/BDiRa4f5xrc.jpg?size=768x768&quality=96&sign=e991080bb0e0290c0a7a48b5a4983494&type=album",
};

const users={
0:{name: "Ян", lastname:"Шестаков", id: 1},
1:{name: "Павел", lastname:"Знаменский", id: 2},
2:{name: "Мила", lastname:"Чернова", id: 3},
3:{name: "Игорь", lastname:"Чернов", id: 4},
4:{name: "Константин", lastname:"Костров", id: 5},
5:{name: "Арсений", lastname:"Егоров", id: 6},
6:{name: "Елена", lastname:"Захарова", id: 7},
7:{name: "Дмитрий", lastname:"Каст", id: 8},
8:{name: "Валерия", lastname:"Конопка", id: 9},
9:{name: "Егор", lastname:"Романов", id: 10},
};

export function getUser(userId){
    for (let i = 0; i < Object.keys(users).length; i++) if(users[i].id==userId) return users[i];
    return user;
}
export function getUsers(){
    return users;
}