import AirtableObject from "../lib/AirtableObject"
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
import uuid from 'uuid-random';

export default class Volunteer extends AirtableObject {
  constructor(dataSource) {
    super(dataSource)
  }

  async uploadFile(fileData) {
    if (fileData == null) {
      return null
    }
    const s3 = new AWS.S3();

    let dstBucket = process.env.PHOTOS_BUCKET
    let url = `http://${dstBucket}.s3.amazonaws.com`
    let dstKey = uuid()

    let buf = Buffer.from(fileData.replace(/^data:image\/\w+;base64,/, ""),'base64')
    let type = fileData.split(';')[0].split('/')[1];

    // Upload the thumbnail image to the destination bucket
    let destparams = {
      Bucket: dstBucket,
      Key: dstKey,
      Body: buf,
      ContentEncoding: 'base64',
      ContentType: `image/${type}`
    }
    await s3.putObject(destparams).promise()

    return `${url}/${dstKey}`
  }

  async create(volunteerData) {
    if (volunteerData.hasOwnProperty("photo")) {
      // upload the file to AWS
      let url = await this.uploadFile(volunteerData.photo)

      if (url == null) {
        console.log('no photo uploaded')
      }
      else {
        volunteerData["Photo Upload"] = [{ url: url }]
      }
      delete volunteerData.photo
    }

    // save the data
    return super.create(volunteerData)
  }
}
