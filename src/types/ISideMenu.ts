export type ISideMenu = {
    show: boolean;
    title: string;
    setTitle: (value: string) => void;
    channelName: string;
    setChannelName: (value: string) => void;
    numberOfViews: number;
    setNumberOfViews: (value: number) => void;
    dateOfThePublication: string;
    setDateOfThePublication: (value: string) => void;
    image: string;
    setImage: (value: string) => void;
    isLive?: boolean;
    setIsLive?: (value: boolean) => void;
}