export const initialState = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: '지민',
            },
            content:
                '첫번째 게시글 ㅎㅎ #해시태그 #요것은 무엇인가 #띄워쓰기하면안되여',
            Images: [
                {
                    src: 'https://openimage.interpark.com/dia/images/479/5/210730005/26a75cb85ee943a3aab40e7a0708f72e.jpg',
                },
                {
                    src: 'https://avatars.githubusercontent.com/u/3303885?s=48&v=4',
                },
                {
                    src: 'https://avatars.githubusercontent.com/u/3303885?s=48&v=4',
                },
            ],
            Comments: [
                {
                    User: {
                        nickname: 'nero',
                    },
                    content: '잼써영',
                },
                {
                    User: {
                        nickname: '병건',
                    },
                    content: '화이팅~!',
                },
            ],
        },
    ],
    imagePaths: [],
    postAdded: false,
    isLoading: false,
    isError: false,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPostAction = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addCommentAction = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = {
    id: 2,
    content: '더미더미',
    User: {
        id: 1,
        nickname: '지민',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
                isLoading: false,
                isError: null,
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                postAdded: false,
                isLoading: false,
                isError: action.error,
            };

        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: null,
            };
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
                isLoading: false,
                isError: null,
            };
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                postAdded: false,
                isLoading: false,
                isError: action.error,
            };
        default:
            return state;
    }
};

export default reducer;
