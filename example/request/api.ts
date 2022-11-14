/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ISWRConfig, useGetRequest } from "./useGetRequest";
import { IResponseError } from "../types";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { SWRMutationConfig, useMutationRequest } from "example/request/useMutationRequest";

/*
 *  this file is generated by @openapi-integration/swr-request-generator.
 *  please do not modify it manually.
 */

export const useUpdateBookJourneyUsingPostRequest = (
  {
    journeyId,
    journeyType,
  }: {
    journeyId: string;
    journeyType: string;
  },
  mutationConfig?: SWRMutationConfig<
    IUpdateBookJourneyUsingPostRequest,
    AxiosResponse<{ [key: string]: any }>,
    IResponseError
  >,
  axiosConfig?: AxiosRequestConfig,
) =>
  useMutationRequest<IUpdateBookJourneyUsingPostRequest, AxiosResponse<{ [key: string]: any }>, IResponseError>({
    url: `/book-journey/${journeyId}/${journeyType}`,
    method: "post",
    headers: { "Content-Type": "application/json" },
    mutationConfig,
    axiosConfig,
  });

export const useDeleteAttachmentUsingDeleteRequest = (
  {
    id,
    authorities,
    userId,
    userName,
  }: {
    authorities: string;
    id: string;
    userId: string;
    userName: string;
  },
  mutationConfig?: SWRMutationConfig<undefined, AxiosResponse<undefined>, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useMutationRequest<undefined, AxiosResponse<undefined>, IResponseError>({
    url: `/${id}`,
    method: "delete",
    headers: { Authorities: authorities, "User-Id": userId, "User-Name": userName },
    mutationConfig,
    axiosConfig,
  });

export const useDownloadUsingGetRequest = (
  {
    id,
    accept,
  }: {
    accept: string;
    id: string;
  },
  SWRConfig?: ISWRConfig<IResource, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useGetRequest<IResource, IResponseError>(
    {
      url: `/${id}`,
      method: "get",
      headers: { Accept: accept },
      responseType: "blob",
      ...axiosConfig,
    },
    SWRConfig,
  );

export const useFindBookByIdUsingGetRequest = (
  {
    id,
  }: {
    id: string;
  },
  SWRConfig?: ISWRConfig<IBookDetailVo, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useGetRequest<IBookDetailVo, IResponseError>(
    {
      url: `/book/${id}`,
      method: "get",
      headers: {},
      ...axiosConfig,
    },
    SWRConfig,
  );

export const useGetDocumentByIdUsingGetRequest = (
  {
    documentId,
    from,
  }: {
    documentId: string;
    from?: FromFrom;
  },
  SWRConfig?: ISWRConfig<IDocumentVo, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useGetRequest<IDocumentVo, IResponseError>(
    {
      url: `/documents/${documentId}/doc`,
      method: "get",
      headers: {},
      params: {
        from,
      },
      ...axiosConfig,
    },
    SWRConfig,
  );

export const useGetScheduleDetailsByDateUsingGetRequest = (
  {
    scheduleDate,
    roleId,
  }: {
    roleId?: string;
    scheduleDate: number;
  },
  SWRConfig?: ISWRConfig<IScheduleVo[], IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useGetRequest<IScheduleVo[], IResponseError>(
    {
      url: `/schedules`,
      method: "get",
      headers: {},
      params: {
        scheduleDate,
        roleId,
      },
      ...axiosConfig,
    },
    SWRConfig,
  );

export const useUpdateBookByIdUsingPutRequest = (
  {
    id,
  }: {
    id: string;
  },
  mutationConfig?: SWRMutationConfig<IUpdateBookByIdUsingPutRequest, AxiosResponse<undefined>, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useMutationRequest<IUpdateBookByIdUsingPutRequest, AxiosResponse<undefined>, IResponseError>({
    url: `/book/${id}`,
    method: "put",
    headers: { "Content-Type": "application/json" },
    mutationConfig,
    axiosConfig,
  });

export const useUpdatePetsRequest = (
  mutationConfig?: SWRMutationConfig<IUpdatePetsRequest, AxiosResponse<undefined>, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useMutationRequest<IUpdatePetsRequest, AxiosResponse<undefined>, IResponseError>({
    url: `/pets`,
    method: "patch",
    headers: { "Content-Type": "application/json" },
    mutationConfig,
    axiosConfig,
  });

export const useUploadAttachmentUsingPostRequest = (
  {
    authorities,
    userId,
    userName,
  }: {
    authorities: string;
    userId: string;
    userName: string;
  },
  mutationConfig?: SWRMutationConfig<IUploadAttachmentUsingPostRequest, AxiosResponse<IAttachmentBo>, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useMutationRequest<IUploadAttachmentUsingPostRequest, AxiosResponse<IAttachmentBo>, IResponseError>({
    url: `/`,
    method: "post",
    headers: {
      Authorities: authorities,
      "User-Id": userId,
      "User-Name": userName,
      "Content-Type": "multipart/form-data",
    },
    mutationConfig,
    axiosConfig,
  });

export const useUploadDocumentUsingPostRequest = (
  mutationConfig?: SWRMutationConfig<IUploadDocumentUsingPostRequest, AxiosResponse<undefined>, IResponseError>,
  axiosConfig?: AxiosRequestConfig,
) =>
  useMutationRequest<IUploadDocumentUsingPostRequest, AxiosResponse<undefined>, IResponseError>({
    url: `/documents`,
    method: "post",
    headers: { "Content-Type": "multipart/form-data" },
    mutationConfig,
    axiosConfig,
  });

export interface IUpdateBookJourneyUsingPostRequest {
  body: IStatusFormData;
}

export interface IGetDocumentByIdUsingGetRequest {
  query: {
    from?: FromFrom;
  };
}

export interface IGetScheduleDetailsByDateUsingGetRequest {
  query: {
    roleId?: string;
    scheduleDate: number;
  };
}

export interface IUpdateBookByIdUsingPutRequest {
  body: IUpdateBookRequest;
}

export interface IUpdatePetsRequest {
  body: ICat | IDog | null;
}

export interface IUploadAttachmentUsingPostRequest {
  body: FormData;
}

export interface IUploadDocumentUsingPostRequest {
  body: IFileUploadReq;
}

export enum FromFrom {
  "AAA" = "AAA",
  "BBB" = "BBB",
}

export interface IAttachmentBo {
  authorName?: string;
  createdDate?: number;
  fileName?: string;
  id?: string;
  mimeType?: string;
  path?: string;
}

export interface IBookDetailVo {
  CreatedDate?: number;
  attachment?: IScheduleVo;
  author_name?: string;
  filename?: string;
  id?: string;
  mimeType?: string;
  path?: string;
  type?: BookDetailVoType;
}

export enum BookDetailVoType {
  "INTERVENTION_RUN" = "INTERVENTION_RUN",
  "CASE_CREATION_DATE" = "CASE_CREATION_DATE",
}

export interface IBookVo {
  address?: string | null;
  price?: string;
}

export interface IBookingResponse {
  data: IDocumentVo;
  errors?: IErrorInfo[];
}

export interface ICat {
  age?: number;
  hunts?: boolean;
}

export interface IDocumentVo {
  attachment?: IBookDetailVo;
  authorName?: string;
  createdDate?: number;
  id?: string;
  note?: string;
  title?: string;
}

export interface IDog {
  bark?: boolean;
  breed?: DogBreed;
}

export enum DogBreed {
  "Dingo" = "Dingo",
  "Husky" = "Husky",
  "Retriever" = "Retriever",
  "Shepherd" = "Shepherd",
}

export interface IErrorInfo {
  errorMessage?: string;
}

export interface IFile {
  absolute?: boolean;
  absoluteFile?: IFile;
  absolutePath?: string;
  canonicalFile?: IFile;
  canonicalPath?: string;
  directory?: boolean;
  executable?: boolean;
  file?: boolean;
  freeSpace?: number;
  hidden?: boolean;
  lastModified?: number;
  name?: string;
  parent?: string;
  parentFile?: IFile;
  path?: string;
  readable?: boolean;
  totalSpace?: number;
  usableSpace?: number;
  writable?: boolean;
}

export interface IFileUploadReq {
  file: FormData;
}

export interface IInputStream {
  [key: string]: any;
}

export interface IResource {
  description?: string;
  file?: IFile;
  filename?: string;
  inputStream?: IInputStream;
  open?: boolean;
  readable?: boolean;
  uri?: IUri;
  url?: IUrl;
}

export interface IScheduleVo {
  schedules?: IBookVo[][] | null;
  shiftId?: string;
  team?: string;
}

export interface IStatusFormData {
  [key: string]: any;
}

export interface IUri {
  absolute?: boolean;
  authority?: string;
  fragment?: string;
  host?: string;
  opaque?: boolean;
  path?: string;
  port?: number;
  query?: string;
  rawAuthority?: string;
  rawFragment?: string;
  rawPath?: string;
  rawQuery?: string;
  rawSchemeSpecificPart?: string;
  rawUserInfo?: string;
  scheme?: string;
  schemeSpecificPart?: string;
  userInfo?: string;
}

export interface IUrl {
  authority?: string;
  content?: { [key: string]: any };
  defaultPort?: number;
  deserializedFields?: IUrlStreamHandler;
  file?: string;
  host?: string;
  path?: string;
  port?: number;
  protocol?: string;
  query?: string;
  ref?: string;
  serializedHashCode?: number;
  userInfo?: string;
}

export interface IUrlStreamHandler {
  [key: string]: any;
}

export interface IUpdateBookRequest {
  birthCountry?: string;
  citizenship?: string;
  dateOfBirth?: number;
  employmentStatus?: string;
  ethnicity?: string;
  gender?: string;
  idNumber?: string;
  idType?: string;
  roleId?: string;
  spokenLanguage?: string[];
}
