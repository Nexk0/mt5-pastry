<template>
  <div class="register">
    <div class="register__container">
      <h2 class="">Inscription</h2>
      <form id="register" name="register" @submit="handleRegister" class="">
        <input class="" type="email" v-model="form.email" name="email" placeholder="Email" />
        <input class="" type="text" v-model="form.firstName" name="firstName" placeholder="Prénom" />
        <input class="" type="text" v-model="form.lastName" name="lastName" placeholder="Nom" />
        <input class="" type="submit" value="Commencer" />
      </form>
    </div>
    <div class=""></div>
  </div>
</template>


<script setup lang="ts">
const { retrieveCustomer } = useCustomerStore()

const errorMessage: Ref<string | undefined> = ref(undefined)
const form = ref({
  email: '',
  firstName: '',
  lastName: '',
})
const handleRegister = async (e: Event) => {
  e.preventDefault();
  const { data, error } = await useApi().register(form.value)
  if(error.value) {
    errorMessage.value = error.value?.data.message as string
  }

  if(data.value) {
    window.localStorage.setItem('token', data.value.token);
    await retrieveCustomer(data.value.token)
  }
};
</script>

<style lang="postcss" scoped>
.register{
  width: 100vw;
  height: 100vh;
  background-color: #453E65;
  &__container{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

input[type=text],
input[type=email]{
  color: white;
  background-color: transparent;
  border-bottom: 1px white solid;
  padding-bottom: 4px;
  font-weight: bold;
  margin-bottom: 24px;
  width: 450px;
  text-align: center;
}

form{
  display: flex;
  flex-direction: column;
}

h2{
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 2.4rem;
  margin-bottom: 48px;
}

input[type=submit]{
  background-color: rgb(225 29 72);
  padding: 12px;
  border-radius: 25px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  text-align: center;
}

input[type=submit]:hover{
  background-color: rgb(159 18 57);
  transition: 0.3s;
}
</style>