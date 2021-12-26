<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form @submit.prevent="register">
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" class="form-control" v-model="form.username" placeholder="Username" autocomplete="username" />
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" class="form-control" v-model="form.email" placeholder="Email" autocomplete="email" />
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" class="form-control"  v-model="form.password" placeholder="Password" autocomplete="new-password"  />
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" v-model="form.password_confirm" class="form-control" placeholder="Repeat password" autocomplete="new-password"/>
                </b-input-group>
                <b-button type="submit" variant="success" block>Create Account</b-button>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Register',
  data() {
    return {
      form : {
        username: '',
        password: '',
        email: '',
        password_confirm: ''
      }
    }
  },
  methods: {
    register()  {
      axios.post("http://localhost:9000/register", {
        username: this.form.username,
        password: this.form.password,
        email: this.form.email
      })
      .then(res => {
        this.$router.push("/authorization")
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

}
</script>

