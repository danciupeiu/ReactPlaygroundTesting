import stateSchema from './stateSchema';
import tv4 from 'tv4';

export default ({dispatch, getState}) => (next) => (action) => {
    next(action);

    const valid = tv4.validate(getState(), stateSchema);
    if (!valid) {
        console.warn('Invalid state schmea detected');
    }
}