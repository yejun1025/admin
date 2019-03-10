<template>
  <div class="login">
    <el-form
      :model="formdata"
      status-icon
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
      label-position=top
      :rules='rules'
    >
    <h2>用户名登录</h2>
     <el-form-item label="用户名" prop="username">
        <el-input v-model.trim="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model.trim="formdata.password" autocomplete="off"></el-input>
      </el-form-item>
    
     
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
        formdata: {
          password: '',
          username: '',
        },
        rules:{
           username: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
           password: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
       }
      };
      
    },
     methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //   正确
            alert('submit!');
          } else {
            //   错误
             this.$message.error('请正确输入账号和密码');
            return false;
          }
        });
      },
    }
    }
    

</script>

<style>
body,html{
    height: 100%;
    padding: 0;
    margin: 0;
    
}
.login{
    background-color: #324152;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.el-form{
    width: 581px;
    height: 437px;
    background-color: #fff;
    color:black;
    box-sizing: border-box;
    padding: 20px;
}
.el-button{
    width: 100%;
}
</style>
