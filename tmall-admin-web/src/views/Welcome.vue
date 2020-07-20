<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="url in urls" :key="url">
        <el-image
          style="width: 100%; height: 100%"
          :src="url"
          :fit="fit"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      fit: 'fill',
      urls: [
        'https://imgcps.jd.com/ling/100008348542/5omL5py66auY5ZOB5ZGz/5ZOB6LSo5LiA56uZ54i96LSt/p-5bd81f3682acdd181dfeb407/cd6907cb/590x470.jpg',
        'https://imgcps.jd.com/ling/100013362104/56m66LCD5paw5qy-6YCf6YCS/5Lq65rCU55av5oqi5Zeo57-75aSp/p-5bd8253082acdd181d02fa3b/53d74a1c/590x470.jpg',
        'https://img30.360buyimg.com/pop/s590x470_jfs/t1/114772/5/11744/88063/5f042670Ee408ea17/becd768450e64492.jpg.webp',
        'https://img11.360buyimg.com/da/s590x470_jfs/t1/125893/22/7301/63848/5f12c0caE7d7b8a39/0757e484f96d662f.jpg.webp'
      ]
    }
  }
}
</script>

<style scoped>
.box-card {
  margin-top: 20px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
