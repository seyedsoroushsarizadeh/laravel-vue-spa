<template>
    <main>
        <div class="container-fluid px-4">
            <h1 class="mt-4">Dashboard</h1>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item active">Dashboard</li>
            </ol>
            <div class="card mb-4">
                <div class="card-header d-flex">
                    <span><i class="fas fa-table me-1"></i>category manage</span>
                    <button class="btn btn-success btn-sm ml-auto" @click="showCategoryModel">add new category <i class="fa fa-plus"></i></button>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>soroush</td>
                            <td>not found</td>
                            <td>
                                <button class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
                                <button class="btn danger btn-sm"><i class="fa fa-trash"></i></button>

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <b-modal ref="NewCategoryModel" hide-footer title="Add New Category">
                <div class="d-block text-center">
                    <form @submit.prevent="createCategory">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" class="form-control" id="name" v-model="categoryData.name" placeholder="Enter name">
                        </div>
                        <div class="form-group">
                            <label for="name">choose an image</label>
                            <div v-if="categoryData.image.name">
                                <img src="" ref="newCategoryImageDisplay" class="img-thumbnail w-50" />
                            </div>
                            <input type="file" class="form-control" id="image" ref="newCategoryImage" v-on:change="attachImage" placeholder="Enter name">
                        </div>
                        <hr>
                        <button type="submit" class="btn btn btn-primary">save</button>
                        <button type="button" class="btn btn btn-danger" @click="hideCategoryModel">cancel</button>
                    </form>
                </div>
            </b-modal>
        </div>
    </main>
</template>

<script>
import * as categoryService from "../services/category_service";
export default {
    name: "Category",
    data(){
        return{
            categoryData:{
                name:'',
                image:""
            }
        }
    },
    methods:{
        attachImage(){
            this.categoryData.image = this.$refs.newCategoryImage.files[0];
            let reader = new FileReader();
            reader.addEventListener('load' , function (){
                this.$refs.newCategoryImageDisplay.src = reader.result;
            }.bind(this) , false);
            reader.readAsDataURL(this.categoryData.image);
        },
        createCategory : async function (){
            let formData = new FormData;
            formData.append('name', this.categoryData.name);
            formData.append('image', this.categoryData.image);

            try {
                const response = await categoryService.createCategory(formData);
                console.log(response);
            }
            catch (error){
                console.log(error);
            }
        },
        showCategoryModel(){
            this.$refs.NewCategoryModel.show();
        },
        hideCategoryModel(){
            this.$refs.NewCategoryModel.hide();
        }
    }
}
</script>
