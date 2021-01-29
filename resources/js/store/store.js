import { createStore } from 'vuex'
import stiker from './stiker'
import app from './app'
import categories from './categories'
import auth from './auth'
import error from './error'

export default createStore({

    modules: {
        stiker, app, categories, auth, error
    }
})
