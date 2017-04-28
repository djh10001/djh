/** 
 *
 *登录页面控制
 *dengjianhong
 *2017-04-09
 **/

var login= {     //工单发布  
	version : "1.0.0",
	
	editUrl : "",
	
	eventFunction:{	
	  /**
	   * “删除”操作确认弹框
	   */
	  delFun : function() {
		
	  },
	  /**
	   *提交前的动作
	   */
	  doSthBeforeSubmit : function(userName,password){		
		if(userName==null || userName=='' || userName==undefined){
			swal({title:"用户名不能为空！",text:"",type:"error"});
			return  false;
		}
		if(password==null || password=='' || password==undefined){
			swal({title:"密码不能为空！",text:"",type:"error"});
			return  false;
		}
		return true;
	  },
	   /**
	   *登录的方法
	   */
	  doLogin: function (){
		var userName=$("#userName").val();
        var password=$("#password").val();
	    if(login.eventFunction.doSthBeforeSubmit(userName,password)){			
			//调用登陆的方法
			window.location.href="/admin/page/index.html"; 	
			
		}
	  }
	}	
};

//初始化页面
$(function(){
	
	//点击登录按钮时进行判断
	$("#loginButton").on("click", function() {
		//进行表单判断
		login.eventFunction.doLogin();
	}); 
	
		 	 	 
	
});


