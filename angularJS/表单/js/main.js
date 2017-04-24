/**
 * Created by king on 2017/3/22.
 */
angular.module("myApp", [])
    .controller('SignUpController',function($scope){
    $scope.userdata={};
        $scope.submitForm =function(){
            console.log($scope.userData);
            if($scope.SignUpForm.$invalid)
            alert('请检查信息');
            else
            alert('提交成功');

        }
})
    .directive('compare',function(){
        var o={};
        o.strict='AE';
        o.scope={
            orgText:"=compare"
        }
        o.require='ngModel';
        o.link=function(sco,ele,attr,con){
            con.$validators.compare=function(v){
                return v==sco.orgText;
            }
            sco.$watch('orgText',function(){
                con.$validate();
            })
        }
        return o;
    })