export default function handler(req, res) {
  const assetLinks = [
      {
          relation: ["delegate_permission/common.handle_all_urls"],
          target: {
            "namespace": "basic",
            "package_name": "com.snap.camerakit.sample",
            "sha256_cert_fingerprints": [
              "16:CC:9C:17:1C:18:33:38:A6:53:BA:06:12:48:A0:D9:FE:31:09:34:7A:BD:70:55:69:6A:8B:92:3A:CE:4C:6A"
            ]
          }
      }
  ];
  res.status(200).json(assetLinks);
}