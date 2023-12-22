const fs = require('fs').promises;

const getAllUser = async () => {
    try {
        const allUser =
            await fs.readFile('../users.json', 'utf8');
        return allUser;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const getRandomUser = async (limit = 1000) => {
    const allUsers = await getAllUser();
    console.log(allUsers)
    if (allUsers.length > 0) {
        const randomIndex =
            Math.floor(Math.random() * Math.min(allUsers.length, limit));
        return allUsers[randomIndex];
    } else {
        return null;
    }
};

const replaceData = async (userData) => {
    try {
        fs.writeFile('../users.json', JSON.stringify(userData), err => {
            console.log(err);
        });
    } catch (err) {
        console.log(err);
    }
};

const saveUser = async (userDto) => {
    try {
        const allUser = await getAllUser();
        allUser.push(userDto);
        replaceData(allUser);
    } catch (err) {
        console.log(err);
    }
}

const updateUser = async (userDto, id) => {
    const allUser = await getAllUser();
    try {
        const userIdx    = allUser.findIndex((user) => user.Id == id);
        allUser[userIdx] = userDto;
        saveUser(allUser);
    } catch(error) {
        console.log(error);
    }
}

const deleteUser = async (id) => {
    const allUser = await getAllUser();

    try {
        const userIndx = allUser.findIndex((user) => user.Id == id);
        allUser.splice(userIndx, 1);

        replaceData(allUser);
    } catch (error) {
        console.log(error);
    }
}

const updateMultipleData = async (data) => {
    const allUser = await getAllUser();

    try {
        const newData = 
            allUser.map(
                (dbData) => {
                    const idx = data.findIndex((value) => value.Id == dbData.Id);
                    if (idx !== -1) {
                        return data[idx];
                    } else {
                        return dbData;
                    }
            });
        replaceData(newData);
    } catch (err) {
        console.log(err);
    }
};

module.exports = UserService = {
    getAllUser,
    getRandomUser,
    saveUser,
    updateMultipleData,
    updateUser,
    deleteUser
};
