<template>
  <div class="todos">

    <input class="todos__input" type="text" v-model="$data.__input" @keyup.enter="handleAddTodo"
           @input="__handleInput"/>

    <ul class="todos__list" v-if="todos.length">
      <li class="todos__todo" v-for="(todo, index) in todos" :data-todo-id="todo.id">
        <label :for="`todo-input-${todo.id}`">{{todo.name}}</label>
        <input :id="`todo-input-${todo.id}`" class="todos__todo-input" :value="todo.input" type="text"
               @keyup.enter="handleEditTodo" @input="handleInputEdit"/>
        <button class="todos__todo-remove-btn" @click="handleRemoveTodo">remove</button>
      </li>
    </ul>

  </div>
</template>

<style rel="stylesheet/scss" lang="sass">

</style>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default{
    data (){
      return {
        __input: '',
      }
    },

    computed: {
      ...mapState(
          {
            todos: 'todos'
          }
      ),
    },

    methods: {
      ...mapMutations(['ADD_TODO', 'REMOVE_TODO', 'UPDATE_TODO']),

      handleAddTodo(e){
        this.$data.__input = '';
        this['ADD_TODO']({name: e.target.value, id: new Date().getTime()});
      },

      handleRemoveTodo(e){
        this['REMOVE_TODO'](parseInt($(e.target).parent('li').attr('id')));
      },

      handleEditTodo(e){
        this['UPDATE_TODO']({name: e.target.value, id: parseInt($(e.target).parent('li').data('todo-id'))});
      },

      handleInputEdit(e){
        this['UPDATE_TODO']({input: e.target.value, id: parseInt($(e.target).parent('li').data('todo-id'))});
      },

      __handleInput(e){
        this.$data.__input = e.target.value;
      }

    },

//    render (h){
//      return (<div>
//            {this.$data.__input}
//          <input type="text" value={this.$data.__input} onKeyup={this.handleAddTodo} onInput={this.__handleInput}/>
//
//          <ul>
//            {
//              this.todos.map((todo, index) =>
//                  (<li id={todo.id}>{todo.name}
//                      <button onClick={this.handleRemoveTodo}>remove</button>
//                      <input type="text" value={todo.name} onKeyup={this.handleEditTodo}/>
//                  </li>)
//              )}
//          </ul>
//
//      </div>)
//    },
  }
</script>