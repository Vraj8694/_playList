import { PLAYLIST_DATA } from '../data/play-list';

export const YOUTUBE_URL_REGEX = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;

export const getLinkVideoId = (link: string): string => {
    return link.split("v=")[1].substring(0, 11);;
};

export const getVideoLink = (playListId: number): string => {
    const currentItem = PLAYLIST_DATA && PLAYLIST_DATA.find(val => val.id === +playListId);
    return currentItem && currentItem.link;
}

export const callPlayer = (frame_id, func, args?) => {
    let videoIframe: any = document.getElementById(frame_id);
    if (videoIframe && videoIframe.tagName.toUpperCase() != 'IFRAME') {
        videoIframe = videoIframe.getElementsByTagName('iframe')[0];
    }
    console.log('**video iframe is', videoIframe, frame_id);
    if (videoIframe) {
        videoIframe.contentWindow.postMessage(JSON.stringify({
            "event": "command",
            "func": func,
            "args": args || [],
            "id": frame_id
        }), "*");
    }
}

export const getIframeId = (playListId: number): string => {
    return 'playlist-video-' + playListId.toString();
}

export const playVideo = (playListId: number): void => {
    const iframeId = getIframeId(playListId);
    callPlayer(iframeId, 'playVideo');
};

export const pauseVideo = (playListId: number): void => {
    const iframeId = getIframeId(playListId);
    callPlayer(iframeId, 'pauseVideo');
};

export const stopVideo = (playListId: number): void => {
    const iframeId = getIframeId(playListId);
    callPlayer(iframeId, 'stopVideo');
};

const getAllIframeIds = (): string[] => {
    const allFrameIds = [];
    PLAYLIST_DATA.forEach((d) => {
        allFrameIds.push(getIframeId(d.id));
    });
    return allFrameIds;
};

export const playAllVideos = (): void => {
    const allFrameIds = getAllIframeIds();
    allFrameIds.forEach(currFrameId => {
        callPlayer(currFrameId, 'playVideo');
    });
};

export const pauseAllVideos = (): void => {
    const allFrameIds = getAllIframeIds();
    allFrameIds.forEach(currFrameId => {
        callPlayer(currFrameId, 'pauseVideo');
    });
};

export const stopAllVideos = (): void => {
    const allFrameIds = getAllIframeIds();
    allFrameIds.forEach(currFrameId => {
        callPlayer(currFrameId, 'stopVideo');
    });
};