<template>
    <div class="song">
        <audio ref="audio" src="/static/song/1.mp3" v-show="false"></audio>
        <button
            class="playBtn"
            ref="btn"
            @click="play"
            :style="{ backgroundImage: btnBgi }"
        ></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            audio: '',
            isPlaying: false
        }
    },
    computed: {
        btnBgi() {
            return this.isPlaying
                ? "url('/static/assets/pause.png')"
                : "url('/static/assets/play.png')"
        }
    },
    mounted() {
        this.audio = this.$refs.audio
    },
    methods: {
        play() {
            this.isPlaying = !this.isPlaying
            this.isPlaying ? this.audio.play() : this.audio.pause()
        }
    }
}
</script>

<style lang='less'>
.song {
    .playBtn {
        width: 50px;
        height: 50px;
        background-size: 50px 50px;
        border: none;
        outline: none;
    }
}
</style>