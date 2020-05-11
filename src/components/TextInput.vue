<template>
    <div>
        <p>{{description}}</p>
    </div>
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

<style lang="scss" scoped>

</style>