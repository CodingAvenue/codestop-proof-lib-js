import Filter from './Filter';
export default class BinaryExpression extends Filter {
    getRuleClass(): any;
    getRuleFilter(): any;
    private getOperator;
}
