
// TODO: Move this to types file
type ScrollIntoViewOption = {
    behavior: 'smooth' | 'auto';
    inline: 'start' | 'center' | 'end' | 'nearest';
    block: 'start' | 'center' | 'end' | 'nearest';
};

// TODO: study
export const scrollIntoView = (element: HTMLElement | null, options: ScrollIntoViewOption = {
    behavior: 'smooth', 
    inline: 'nearest',
    block: 'start'
}) => {
    if(!element) return 
    element.scrollIntoView(options)
}