import axios from 'axios'
import { GET_MEALS, GET_MEAL_BY_ID, ADD_MEAL, DELETE_MEAL, MEALS_LOADING } from './types'

export const getMeals = () => dispatch => {
    dispatch(setMealsLoading())
    axios
        .get('/api/meals')
        .then(res =>
            dispatch({
                type: GET_MEALS,
                payload: res.data
            })
        )
}

export const getMealById = id => dispatch => {
    dispatch(setMealsLoading())
    axios
        .get(`/api/meals/${id}`)
        .then(res =>
            dispatch({
                type: GET_MEAL_BY_ID,
                payload: res.data
            })
        )
}

export const addMeal = meal => dispatch => {
    axios
        .post('/api/meals', meal)
        .then(res =>
            dispatch({
                type: ADD_MEAL,
                payload: res.data
            })
        )
}

export const deleteMeal = id => dispatch => {
    axios
        .delete(`/api/meals/${id}`)
        .then(res =>
            dispatch({
                type: DELETE_MEAL,
                payload: id
            })
        )
}

export const setMealsLoading = () => {
    return {
        type: MEALS_LOADING
    }
}