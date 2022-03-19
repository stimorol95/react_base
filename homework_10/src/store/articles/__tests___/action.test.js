import {GET_articles_SUCCESS, getarticles, getarticlesFailure, getarticlesRequest, getarticlesSuccess} from "../actions";



describe('articles action test', () => {
    it('return object with type and payload', () => {
        const payload = [];
        const expected = {
            type: GET_articles_SUCCESS,
            payload,
        };

        const received = getarticlesSuccess(payload);

        expect(received).toEqual(expected);
    });
});

describe('get articles test', () => {
    it('call getarticles with arg getarticlesReq', () => {
        const mockFn = jest.fn();

        getarticles()(mockFn);

        expect(mockFn).toHaveBeenCalledWith(getarticlesRequest());
    });

    it('call getarticlesSuccess', async () => {
        const mockFn = jest.fn();
        const result = ['test'];

        fetchMock.mockResponseOnce(JSON.stringify(result));

        await getarticles()(mockFn);

        expect(mockFn).toHaveBeenLastCalledWith(getarticlesSuccess(result));
    });

    it('call getarticlesFailure', async () => {
        const mockFn = jest.fn();
        const error = new Error('some err');

        fetchMock.mockRejectOnce(error);

        await getarticles()(mockFn);

        expect(mockFn).toHaveBeenLastCalledWith(getarticlesFailure(error));
    });
});