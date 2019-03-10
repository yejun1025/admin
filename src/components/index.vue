<template>
  <el-container class="index-Container">
    <el-header class="index-header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
              <img src="../assets/logo.png" alt="">
          </div>
        </el-col>
        <el-col :span="16">
          <div class="grid-content bg-purple-light">
              电商后台系统
          </div>
        </el-col>
        <el-col :span="4" class="header-rigth">
          <div class="grid-content bg-purple">
              <el-button type="info" @click="del">退出</el-button>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside class="index-aside" width="200px">Aside</el-aside>
      <el-main class="index-main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  beforeCreate(){
    if (window.sessionStorage.getItem('token')) {
      
    }else{
      this.$message.warning('要登录哦!!!')
      this.$router.push('/login');
    }
  },
  methods: {
       del() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        
             window.sessionStorage.removeItem('token'),
            this.$router.push('/login')
           
          }).catch(() => {
              
        });;
        }
    }
  }  

</script>

<style>
.el-button {
    width: auto;
}
.index-Container {
    height: 100%;
}
.index-header {
  background-color: #b3c0d1;
  text-align: center;
  height: 60px;
  line-height: 60px;
  padding: 0;
}
.index-aside {
  background-color: #ffffff;
}
.index-main {
  background-color: #e9eef3;
}
</style>
