export type PostType = {
    title: string;
    subtitle: string;
    figure?: PostFigure
    text: string;
    url: string;
    date: string;
};

export type PostFigure = {
    imageUrl: string
    imageAltText: string;
    figureCaption: string;
}