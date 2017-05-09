<script>
  export default{
    functional: true,
    // To compensate for the lack of an instance,
    // we are now provided a 2nd context argument.
    render (h) {
      return (<div>Header (functional component)</div>)
    },
    // Props are optional
    props: {
      // ...
    }
  };
</script>
