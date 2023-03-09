import '@testing-library/jest-dom';

import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/index';

import { Theme } from '@/Components/Theme/Theme';
import { ToggleBar } from '@/Components/ToggleBar/ToggleBar';

import { Provider } from 'react-redux';
import store from '../stores/MenuStore';

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        const heading = screen.getByText("seja bem vindo");

        expect(heading).toBeInTheDocument();
    })
});

describe('Theme component', () => {
    it('should renders with dark mode by default', () => {
        render(<Theme setTheme={jest.fn()} />);
  
        const themeToggler = screen.getByTestId('themeToggler');
        const icon = screen.getByTestId('icon');
    
        expect(themeToggler).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });
  
    it('should toggles the mode when clicked', () => {
        const setTheme = jest.fn();
        render(<Theme setTheme={setTheme} />);
        const themeToggler = screen.getByTestId('themeToggler');
    
        fireEvent.click(themeToggler);

        expect(setTheme).toHaveBeenCalledWith('light');

        fireEvent.click(themeToggler);

        expect(setTheme).toHaveBeenCalledWith('dark');
    });
});

jest.mock('@/Hooks/UseMediaQuery', () => ({
    useIsMedium: () => true,
}));

window.scrollTo = jest.fn();
  
describe('Menu component', () => {
    it('expand when clicked', async () => {
        render(
            <Provider store={store}>
                <ToggleBar />
            </Provider>
        );

        const collapsiable = screen.getAllByTestId('collapsiable')[0];
        const Itens = screen.getAllByTestId('menuItens')[0];

        expect(getComputedStyle(Itens).height).toBe('0px');

        fireEvent.click(collapsiable);

        expect(getComputedStyle(Itens).height).toBe("auto");

    });

    it('should opens and closes when button is clicked', async () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <ToggleBar />
            </Provider>
        );

        const button = getByTestId('closeButton');
        const menuBar = getByTestId('menubar');

        expect(menuBar).not.toHaveAttribute('style');
        
        fireEvent.click(button);

        await waitFor(() => {expect(menuBar).toHaveStyle({'transform': 'translateX(0) translateZ(0)'})}, {
            timeout: 2000,
        });

        fireEvent.click(button);
        
        await waitFor(() => {expect(menuBar).toHaveStyle({'transform': 'translateX(-240px) translateZ(0)'})},{
            timeout: 2000,
        });
    });
});