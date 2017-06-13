/**
 * Created by zhangtingcen on 2017/6/6.
 */
import {observable, action, computed} from 'mobx';

export default class Model {

    @observable count = 0;

    @observable loginBannerTitle = '主动记录的文档化生活';

    @observable username = '';
    @observable password = '';

    // 等待条,初始不显示
    @observable loginSpinning = false;
    @action showSpin() {
        this.loginSpinning = true;
    }
    @action hideSpin() {
        this.loginSpinning = false;
    }

    @action plusCount() {
        this.count++;
    }

    @action minusCount() {
        this.count--;
    }
}