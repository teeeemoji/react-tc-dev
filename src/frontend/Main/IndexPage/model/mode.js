/**
 * Created by zhangtingcen on 2017/6/6.
 */
import {observable, action, computed} from 'mobx';

export default class Model {

    @observable count = 0;

    @action plusCount() {
        this.count++;
    }

    @action minusCount() {
        this.count--;
    }
}