/* tslint:disable */
/* eslint-disable */
/**
 * DevBook.API, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PatchWorkTaskCommandDto
 */
export interface PatchWorkTaskCommandDto {
    /**
     * 
     * @type {string}
     * @memberof PatchWorkTaskCommandDto
     */
    projectId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchWorkTaskCommandDto
     */
    description?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchWorkTaskCommandDto
     */
    details?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchWorkTaskCommandDto
     */
    date?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PatchWorkTaskCommandDto
     */
    start?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchWorkTaskCommandDto
     */
    end?: string | null;
}

/**
 * Check if a given object implements the PatchWorkTaskCommandDto interface.
 */
export function instanceOfPatchWorkTaskCommandDto(value: object): value is PatchWorkTaskCommandDto {
    return true;
}

export function PatchWorkTaskCommandDtoFromJSON(json: any): PatchWorkTaskCommandDto {
    return PatchWorkTaskCommandDtoFromJSONTyped(json, false);
}

export function PatchWorkTaskCommandDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchWorkTaskCommandDto {
    if (json == null) {
        return json;
    }
    return {
        
        'projectId': json['projectId'] == null ? undefined : json['projectId'],
        'description': json['description'] == null ? undefined : json['description'],
        'details': json['details'] == null ? undefined : json['details'],
        'date': json['date'] == null ? undefined : (new Date(json['date'])),
        'start': json['start'] == null ? undefined : json['start'],
        'end': json['end'] == null ? undefined : json['end'],
    };
}

export function PatchWorkTaskCommandDtoToJSON(value?: PatchWorkTaskCommandDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'projectId': value['projectId'],
        'description': value['description'],
        'details': value['details'],
        'date': value['date'] == null ? undefined : ((value['date'] as any).toISOString()),
        'start': value['start'],
        'end': value['end'],
    };
}

