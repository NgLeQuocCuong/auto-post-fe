import { Optional } from 'utils/commonType';

// interface IProfile {
//     status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'REVIEWING';
// }

export class ProfileState {
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    dateJoined: string;
    facebookStatus: boolean;
    zaloStatus: boolean;
    avatar: string;
    // profile: IProfile;

    constructor(data?: IProfileState) {
        this.avatar = data?.avatar || '';
        this.email = data?.email || '';
        this.firstName = data?.firstName || '';
        this.lastName = data?.lastName || '';
        this.username = data?.username || '';
        this.dateJoined = data?.dateJoined || '';
        this.facebookStatus = data?.facebookStatus || false;
        this.zaloStatus = data?.zaloStatus || false;
        // this.profile = data?.profile || { status: 'PENDING' };
    }
}

export type IProfileState = Optional<ProfileState>;
