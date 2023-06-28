import { useSelector } from 'react-redux';
import { profileActions } from 'reducers/profile';
import { IProfileState } from 'reducers/profile/type';
import { dispatch } from 'store/Store';
import { StoreState } from 'store/type';

export const useUserProfile = () => {
    return useSelector((state: StoreState) => state?.profile);
};

export const setUserProfile = (profile: IProfileState) => {
    dispatch(profileActions.UPDATE_PROFILE(profile));
};
