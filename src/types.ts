export enum DrawerMenuNames {
    Start = 'Start',
    YourCard = 'YourCard',
    Favorites = 'Favorites',
    YourOrder = 'YourOrder'
}

export interface IDrawer {
    label: string;
    name: DrawerMenuNames;
    component: React.ComponentType<any>;

}