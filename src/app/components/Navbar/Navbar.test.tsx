import { render, screen } from "@testing-library/react";
import userEvents from "@testing-library/user-event";
import '@testing-library/jest-dom';
import Navbar from "./Navbar";

describe('Navbar component', () => {
    beforeEach(() => {
        render(<Navbar />);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });
    it('renders the navbar', () => {
        const navbar = screen.getByRole('navigation');
        expect(navbar).toBeInTheDocument();
        expect(navbar).toHaveClass('fixed top-0 left-0 w-full h-15 shadow-md p-2 sm:p-3 border-b bg-[var(--background)] border-b-gray-800 z-[1001]');
    });

    it('renders the logo', () => {
        const logo = screen.getByAltText(/logo/i);
        const title = screen.getByText(/reddit/i);
        expect(title).toBeInTheDocument();
        expect(logo).toBeInTheDocument();
    });

    it('renders the search bar', () => {
        const searchBar = screen.getByPlaceholderText(/Search Reddit/i);
        expect(searchBar).toBeInTheDocument();
    });

    it('updates the search text on input change', async () => {
        const searchBar = screen.getByPlaceholderText(/Search Reddit/i) as HTMLInputElement;
        await userEvents.type(searchBar, 'test');
        expect(searchBar.value).toBe('test');
    });

    it('renders the message button and handles click', async () => {
        const messageIcon = screen.getByRole('button', { name: /messages/i });
        expect(messageIcon).toBeInTheDocument();

        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

       await userEvents.click(messageIcon);
       expect(alertMock).toHaveBeenCalledWith('Messages');
       alertMock.mockRestore();
    });

    it('renders the create post button and handles click', async () => {
        const createPostButton = screen.getByRole('button', { name: /create/i });
        expect(createPostButton).toBeInTheDocument();

        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        await userEvents.click(createPostButton);
        expect(alertMock).toHaveBeenCalledWith('Create Post');
        alertMock.mockRestore();
    });

    it('renders the notification button and clears notifications on click', async () => {
        const notificationButton = screen.getByRole('button', { name: /notifications/i });
        const notificationBadge = screen.queryByText(/5/i);

        expect(notificationBadge).toBeInTheDocument();
        expect(notificationButton).toBeInTheDocument();

        await userEvents.click(notificationButton);
        expect(notificationBadge).not.toBeInTheDocument();
    });

    it('renders the profile button', async () => {
        const profileButton = screen.getByRole('button', { name: /user profile/i });
        expect(profileButton).toBeInTheDocument();

        const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

        await userEvents.click(profileButton);
        expect(alertMock).toHaveBeenCalledWith('User Profile');
        alertMock.mockRestore();
    });


});