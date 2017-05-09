<template>
    <div class="footer">Footer (This will be pre-compiled)
        <div class="footer__icon" :style="{backgroundImage}"></div>
    </div>
</template>

<script>
  import logo from './logo.png';

  export default{
    data () {
      return{
        backgroundImage: `url('${logo}')`
      };
    },
    props: {
      // ...
    }
  };
</script>

<style rel="stylesheet/scss" lang="sass">
    $primary-color: #d33;

    .footer {
        transform: translate(0, 30px);
        user-select: none;
        &__icon {
            height: 30px;
            width: 30px;
            background-size: cover;
        }
        &:hover{
            color: color($primary-color a(0.45))
        }
    }
</style>