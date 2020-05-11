<template>
    
    <ul class="list">
        <li>
        {{description}}
        </li>
    </ul>
    
</template>

<script>
    export default {
        props: {
            description: {
                type: String,
                default: 'Send it to me' 
            }
        }
    }
</script>

<style scoped>

.list{
    position: absolue;
    padding-left: 36%;
    font-size: 24px;
    font-weight: bold;
    color: blue;
    list-style: square;
}



</style>