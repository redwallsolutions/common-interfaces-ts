export type IThemeMode = 'light' | 'dark'
export type IAppearance = 'default' | 'primary' | 'secondary'

export interface ITheme {
    /**
     * The mode prop defines if the component will be rendered in the 'dark' or 'light mode.
     */
    mode: IThemeMode
    [attr: string]: any
}

export interface ICommonProps {
    /**
     * The theme prop defines the current theme of the component.
     */
    theme?: ITheme
    /**
     * The appearance prop defines the current appearance of the component.
     */
    appearance?: IAppearance
}