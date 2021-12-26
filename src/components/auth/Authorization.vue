<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit.prevent="login">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" v-model="form.username" class="form-control" placeholder="Username" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" v-model="form.password" class="form-control" placeholder="Password" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button type="submit" variant="primary" class="px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-badge show v-if="show" variant="danger">Неверный пароль или логин</b-badge>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <h4>Начните изучать SQL уже сегодня!</h4>
                  <router-link to="registration">
                    <b-button variant="primary" class="active mt-3">
                    Register Now!
                    </b-button>
                  </router-link>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      show: false
    }
  },
  methods: {
    login() {
      axios.post("http://localhost:9000/login", {
        username: this.form.username,
        password: this.form.password
      })
      .then(() => {
        this.$store.commit('SET_USER_NAME', this.form.username)
        console.log(this.$store.getters.GET_USER_NAME)
        this.show = !this.show
        this.$router.push("/dashboard")
        })
      .catch(err => {
        this.show = true
        console.log(err)
      })
    }
  }
}
</script>
