import AirtableObject from "../lib/AirtableObject"
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
import uuid from 'uuid-random';
import volunteer from "../tests/volunteers/volunteer";

export default class Volunteer extends AirtableObject {
  constructor(dataSource) {
    super(dataSource)
  }

  async uploadFile(fileData) {
    const s3 = new AWS.S3();

    let url = `http://${process.env.PHOTOS_BUCKET}.s3-website.${process.env.REGION}.amazonaws.com`
    let dstBucket = process.env.PHOTOS_BUCKET
    let dstKey = uuid()

    let buf = Buffer.from(fileData.replace(/^data:image\/\w+;base64,/, ""),'base64')
    let type = fileData.split(';')[0].split('/')[1];

    // Upload the thumbnail image to the destination bucket
    try {
      let destparams = {
        Bucket: dstBucket,
        Key: dstKey,
        Body: buf,
        ContentEncoding: 'base64',
        ContentType: `image/${type}`
      }
      await s3.putObject(destparams).promise()
    }
    catch (error) {
      console.log(error)
      return null
    }

    return `${url}/${dstKey}`
  }

  async create(volunteerData) {
    if (volunteerData.hasOwnProperty("photo")) {
      // upload the file to AWS
      let url = await this.uploadFile(volunteerData.photo)

      if (url == null) {
        console.error('file upload failed')
        return {}
      }
      else {
        delete volunteerData.photo
        volunteerData["Photo Upload"] = [{ url: url }]
      }
    }

    // save the data
    return super.create(volunteerData)
  }
}
