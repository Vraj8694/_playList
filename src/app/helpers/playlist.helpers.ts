import { PLAYLIST_DATA } from "../data/play-list";


const getAllPlayListIds = () => {
    return PLAYLIST_DATA.map(val => val.id);
};

export const getNextPlayListId = () => {
    const presentPlayListIds = getAllPlayListIds();
    console.log('*present ids', presentPlayListIds)
    let currentMax = -1;
    for (const cId of presentPlayListIds) {
        if (+cId > currentMax) {
            currentMax = +cId;
        }
    }
    console.log("**current max", currentMax, currentMax+1)
    return currentMax + 1;
};
