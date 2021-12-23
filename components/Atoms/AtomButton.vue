<template>
    <button class="bg-blue-500 w-full h-10 rounded text-white">{{ name }}</button>
</template>

<script>
export default {
    name: 'AtomButton',
    props: [
        "name"
    ]
}
</script>