import { getMoviesList } from "../movies";

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ movies: [] }),
    })
);

beforeEach(() => {
    fetch.mockClear();
});

describe('Get movies request', () => {
    it('sends with the right args', async () => {
        const queryParams = [['title', 'Titanic']];

        getMoviesList(queryParams);

        expect(global.fetch).toHaveBeenCalledWith(
            expect.stringContaining('?title=Titanic')
        );
    })
});