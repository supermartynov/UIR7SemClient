<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form @submit.prevent="register">
                <b-row>
                  <b-col md="9">
                    <h1>Регистрация</h1>
                  </b-col>
                  <b-col>
                    <router-link to="/"><p>На главную</p></router-link>
                  </b-col>
                </b-row>

                <p class="text-muted">Создайте аккаунт</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text"
                                class="form-control"
                                v-model="form.username"
                                placeholder="Имя пользователя"
                                autocomplete="username" />
                </b-input-group>
                <b-input-group id="email_input" class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text"
                                id="email"
                                v-model.trim="form.email"
                                :class="{'is-invalid': ($v.form.email.$dirty && !$v.form.email.required || $v.form.email.$dirty && !$v.form.email.email)}"
                                placeholder="Почта"
                                autocomplete="email" />
                  <b-form-invalid-feedback id="email_input_invalid_feedback">Некорректная формат почты</b-form-invalid-feedback>
                </b-input-group>

                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password"
                                class="form-control"
                                v-model="form.password"
                                :class="{'is-invalid': ($v.form.password.$dirty && !$v.form.password.required)}"
                                placeholder="Пароль"
                                autocomplete="new-password"  />
                </b-input-group>

                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" v-model="form.password_confirm" class="form-control" placeholder="Подтверждение пароля" autocomplete="new-password"/>
                </b-input-group>
                <b-button type="submit" variant="success" block>Создать аккаунт</b-button>
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
import {validationMixin} from 'vuelidate'
import {email, required, minLength} from 'vuelidate/lib/validators'
export default {
  name: 'Register',
  mixins: [validationMixin, ],
  data() {
    return {
      form : {
        username: '',
        password: '',
        email: '',
        password_confirm: ''
      },
      show: false
    }
  },
  validations: {
    form : {
      username: {required, minLength: minLength(7)},
      password: {required, minLength: minLength(7)},
      email: {required, email},
      password_confirm: {required, minLength: minLength(7)}
    }
  },
  methods: {
    register()  {
      if (this.$v.$invalid) {
        console.log("невалидно")
        this.$v.$touch()
        return
      }
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
  },
}
</script>

