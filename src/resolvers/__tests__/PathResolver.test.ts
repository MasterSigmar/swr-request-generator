import { PathResolver } from "../PathResolver";
import openAPI from "./mock-data/openAPI.json";

describe("PathResolver", () => {
  it("should get resolved paths by openAPI schema", () => {
    expect(PathResolver.of((openAPI as any).paths).resolve().resolvedPaths).toEqual(expectedPathResolvedData);
  });

  it("should get correct request creator by resolved paths", () => {
    expect(
      PathResolver.of((openAPI as any).paths)
        .resolve()
        .toRequest(),
    ).toEqual(expectedRequest);
  });

  it("should get correct content type for different operation id", () => {
    expect(PathResolver.of((openAPI as any).paths).resolve().contentType).toEqual(expectedContentType);
  });
});

const expectedPathResolvedData = [
  {
    THeader: {
      Authorities: "string",
      "User-Id": "string",
      "User-Name": "string",
    },
    TReq: {},
    TReqBody: {
      uploadAttachmentUsingPOSTRequest: {
        attachment: "FormData",
      },
    },
    TResp: "IAttachmentBo",
    bodyParams: [],
    formDataParams: [],
    method: "post",
    operationId: "uploadAttachmentUsingPOST",
    pathParams: [],
    queryParams: [],
    requestBody: "uploadAttachmentUsingPOSTRequest",
    url: "/",
  },
  {
    THeader: {
      Accept: "string",
    },
    TReq: {
      id: "string",
    },
    TReqBody: {},
    TResp: "IResource",
    bodyParams: [],
    formDataParams: [],
    method: "get",
    operationId: "downloadUsingGET",
    pathParams: ["id"],
    queryParams: [],
    url: "/${id}",
  },
  {
    THeader: {
      Authorities: "string",
      "User-Id": "string",
      "User-Name": "string",
    },
    TReq: {
      id: "string",
    },
    TReqBody: {},
    TResp: "",
    bodyParams: [],
    formDataParams: [],
    method: "delete",
    operationId: "deleteAttachmentUsingDELETE",
    pathParams: ["id"],
    queryParams: [],
    url: "/${id}",
  },
  {
    THeader: {},
    TReq: {
      journeyId: "string",
      journeyType: "string",
    },
    TReqBody: {
      UpdateBookJourneyUsingPOSTRequest: "IStatusFormData",
    },
    TResp: "{[key:string]:any}",
    bodyParams: [],
    formDataParams: [],
    method: "post",
    operationId: "UpdateBookJourneyUsingPOST",
    pathParams: ["journeyId", "journeyType"],
    queryParams: [],
    requestBody: "UpdateBookJourneyUsingPOSTRequest",
    url: "/book-journey/${journeyId}/${journeyType}",
  },
  {
    THeader: {},
    TReq: {
      id: "string",
    },
    TReqBody: {},
    TResp: "IBookDetailVo",
    bodyParams: [],
    formDataParams: [],
    method: "get",
    operationId: "findBookByIdUsingGET",
    pathParams: ["id"],
    queryParams: [],
    url: "/book/${id}",
  },
  {
    THeader: {},
    TReq: {
      id: "string",
    },
    TReqBody: {
      updateBookByIdUsingPUTRequest: "IUpdateBookRequest",
    },
    TResp: "",
    bodyParams: [],
    formDataParams: [],
    method: "put",
    operationId: "updateBookByIdUsingPUT",
    pathParams: ["id"],
    queryParams: [],
    requestBody: "updateBookByIdUsingPUTRequest",
    url: "/book/${id}",
  },
  {
    THeader: {},
    TReq: {
      "roleId?": "string",
      scheduleDate: "number",
    },
    TReqBody: {},
    TResp: "IScheduleVo[]",
    bodyParams: [],
    formDataParams: [],
    method: "get",
    operationId: "getScheduleDetailsByDateUsingGET",
    pathParams: [],
    queryParams: ["scheduleDate", "roleId"],
    url: "/schedules",
  },
  {
    THeader: {},
    TReq: {},
    TReqBody: {
      uploadDocumentUsingPOSTRequest: "IFileUploadReq",
    },
    TResp: "",
    bodyParams: [],
    formDataParams: [],
    method: "post",
    operationId: "uploadDocumentUsingPOST",
    pathParams: [],
    queryParams: [],
    requestBody: "uploadDocumentUsingPOSTRequest",
    url: "/documents",
  },
  {
    THeader: {},
    TReq: {
      documentId: "string",
      "from?": "FromFrom#EnumTypeSuffix",
    },
    TReqBody: {},
    TResp: "IDocumentVo",
    bodyParams: [],
    formDataParams: [],
    method: "get",
    operationId: "getDocumentByIdUsingGET",
    pathParams: ["documentId"],
    queryParams: ["from"],
    url: "/documents/${documentId}/doc",
  },
];

const expectedRequest = [
  'export const useUpdateBookJourneyUsingPostRequest = ({journeyId,journeyType}:{\n        \'journeyId\': string;\n\'journeyType\': string;\n      }, axiosConfig?: AxiosRequestConfig) => \n        useMutationRequest<{[key:string]:any}, AxiosResponse<{[key:string]:any}>>({\n        url: `/book-journey/${journeyId}/${journeyType}`,\n        method: "post",headers: { "Content-Type": "application/json"},\n        data: updateBookJourneyUsingPostRequest,...axiosConfig});',
  "export const useDeleteAttachmentUsingDeleteRequest = ({id,authorities,userId,userName}:{\n        'authorities': string;\n'id': string;\n'userId': string;\n'userName': string;\n      }, axiosConfig?: AxiosRequestConfig) => \n        useMutationRequest<undefined, AxiosResponse<undefined>>({\n        url: `/${id}`,\n        method: \"delete\",headers: { \"Authorities\": authorities, \"User-Id\": userId, \"User-Name\": userName, },\n        ...axiosConfig});",
  'export const useDownloadUsingGetRequest = ({id,accept}:{\n        \'accept\': string;\n\'id\': string;\n      }, SWRConfig?: ISWRConfig<IResource, IResponseError>, axiosConfig?: AxiosRequestConfig) => \n        useGetRequest<IResource, IResponseError>({\n        url: `/${id}`,\n        method: "get",headers: { "Accept": accept, },responseType: "blob",\n        ...axiosConfig}, SWRConfig);',
  "export const useFindBookByIdUsingGetRequest = ({id}:{\n        'id': string;\n      }, SWRConfig?: ISWRConfig<IBookDetailVo, IResponseError>, axiosConfig?: AxiosRequestConfig) => \n        useGetRequest<IBookDetailVo, IResponseError>({\n        url: `/book/${id}`,\n        method: \"get\",headers: { },\n        ...axiosConfig}, SWRConfig);",
  "export const useGetDocumentByIdUsingGetRequest = ({documentId,from}:{\n        'documentId': string;\n'from'?: FromFrom;\n      }, SWRConfig?: ISWRConfig<IDocumentVo, IResponseError>, axiosConfig?: AxiosRequestConfig) => \n        useGetRequest<IDocumentVo, IResponseError>({\n        url: `/documents/${documentId}/doc`,\n        method: \"get\",headers: { },\n        params: {\n    from\n    },...axiosConfig}, SWRConfig);",
  "export const useGetScheduleDetailsByDateUsingGetRequest = ({scheduleDate,roleId}:{\n        'roleId'?: string;\n'scheduleDate': number;\n      }, SWRConfig?: ISWRConfig<IScheduleVo[], IResponseError>, axiosConfig?: AxiosRequestConfig) => \n        useGetRequest<IScheduleVo[], IResponseError>({\n        url: `/schedules`,\n        method: \"get\",headers: { },\n        params: {\n    scheduleDate,\nroleId\n    },...axiosConfig}, SWRConfig);",
  'export const useUpdateBookByIdUsingPutRequest = ({id}:{\n        \'id\': string;\n      }, axiosConfig?: AxiosRequestConfig) => \n        useMutationRequest<undefined, AxiosResponse<undefined>>({\n        url: `/book/${id}`,\n        method: "put",headers: { "Content-Type": "application/json"},\n        data: updateBookByIdUsingPutRequest,...axiosConfig});',
  'export const useUploadAttachmentUsingPostRequest = ({authorities,userId,userName}:{\n        \'authorities\': string;\n\'userId\': string;\n\'userName\': string;\n      }, axiosConfig?: AxiosRequestConfig) => \n        useMutationRequest<IAttachmentBo, AxiosResponse<IAttachmentBo>>({\n        url: `/`,\n        method: "post",headers: { "Authorities": authorities, "User-Id": userId, "User-Name": userName, "Content-Type": "multipart/form-data"},\n        data: uploadAttachmentUsingPostRequest,...axiosConfig});',
  'export const useUploadDocumentUsingPostRequest = (axiosConfig?: AxiosRequestConfig) => \n        useMutationRequest<undefined, AxiosResponse<undefined>>({\n        url: `/documents`,\n        method: "post",headers: { "Content-Type": "multipart/form-data"},\n        data: uploadDocumentUsingPostRequest,...axiosConfig});',
  'export enum FromFrom {"AAA"="AAA","BBB"="BBB"}',
];

const expectedContentType = {
  UpdateBookJourneyUsingPOST: "application/json",
  updateBookByIdUsingPUT: "application/json",
  uploadAttachmentUsingPOST: "multipart/form-data",
  uploadDocumentUsingPOST: "multipart/form-data",
};
