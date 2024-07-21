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
 * @interface ProjectDto
 */
export interface ProjectDto {
    /**
     * 
     * @type {string}
     * @memberof ProjectDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDto
     */
    details?: string | null;
    /**
     * 
     * @type {number}
     * @memberof ProjectDto
     */
    hourlyRate?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ProjectDto
     */
    currency?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProjectDto
     */
    hexColor?: string | null;
}

/**
 * Check if a given object implements the ProjectDto interface.
 */
export function instanceOfProjectDto(value: object): value is ProjectDto {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function ProjectDtoFromJSON(json: any): ProjectDto {
    return ProjectDtoFromJSONTyped(json, false);
}

export function ProjectDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectDto {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'details': json['details'] == null ? undefined : json['details'],
        'hourlyRate': json['hourlyRate'] == null ? undefined : json['hourlyRate'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'hexColor': json['hexColor'] == null ? undefined : json['hexColor'],
    };
}

export function ProjectDtoToJSON(value?: ProjectDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'details': value['details'],
        'hourlyRate': value['hourlyRate'],
        'currency': value['currency'],
        'hexColor': value['hexColor'],
    };
}

