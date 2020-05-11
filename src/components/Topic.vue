<template>
    <div>
        <h1 >{{topic}}</h1>
    </div>
    
</template>
<script>
    export default {
        props: {
            topic: {
                type: String,
                default: 'Send it to me' 
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>