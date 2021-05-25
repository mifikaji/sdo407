const user={
    name: "Тихон",
    lastname:"Вятский",
    id:"1",
    about: "Кофе 3в1",
    avatar:"https://sun9-23.userapi.com/impg/xYDfigKv8g3Cybm5Jyn2R-1L-OXUVWskKBtYKA/BDiRa4f5xrc.jpg?size=768x768&quality=96&sign=e991080bb0e0290c0a7a48b5a4983494&type=album",
};

const users={
0:{name: "Ян", lastname:"Шестаков",},
1:{name: "Павел", lastname:"Знаменский",},
2:{name: "Мила", lastname:"Чернова",},
3:{name: "Игорь", lastname:"Чернов",},
4:{name: "Константин", lastname:"Костров",},
5:{name: "Арсений", lastname:"Егоров",},
6:{name: "Елена", lastname:"Захарова",},
7:{name: "Дмитрий", lastname:"Каст",},
8:{name: "Валерия", lastname:"Конопка",},
9:{name: "Егор", lastname:"Романов",},
};

export function getUser(){
    return user;
}
export function getUsers(){
    return users;
}