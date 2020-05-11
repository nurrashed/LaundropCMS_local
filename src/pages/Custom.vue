<template>
    <CustomizedLayout>
        <div class="text-3xl font-semibold flex items-center justify-center mx-auto container sm:items-center justify-center">
            <Topic :topic='topic'/>
        </div>
        <div class="flex items-center justify-center text-sm">
            Posted by Laundrop <br> Apil 22, 2020 / Stockholm <br>4 min read
        </div>

        <g-image class="mt-4 w-8/12 h-2/3 ml-64" src="~/assets/images/cleaning cloth.jpg"></g-image>

        <div class="ml-64 mr-64 mt-4 text-justify">
            <TextInput :description = 'description'/>
            <TextInput :description = 'description' class="mt-4"/>
            <TextInput :description = 'description' class="mt-4"/>
        </div>

        <g-image class=" mt-4 w-8/12 h-2/3 ml-64" src="~/assets/images/detergent.jpg"></g-image>

        <div class="ml-64 mr-64 mt-4 text-justify">
            <TextInput :description = 'description'/>
            <TextInput :description = 'description' class="mt-4"/>
            <TextInput :description = 'description' class="mt-4 mb-4"/>
        </div> 
        <footer class="h-1/3 bg-green-800">
            <div class="container bg-grey-lighter p-8">
                <div class="sm:flex mb-4">
                    <div class="sm:w-1/4 h-auto">
                        <div class="flex items-center flex-shrink-0 text-white mr-6">
                            <svg class="fill-current h-8 w-8 mr-2 mt-4 ml-20" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M41.662 7.696C37.76 3.792 32.55 1.642 26.994 1.642c-5.556 0-10.764 2.15-14.668 6.054-3.903 3.905-6.053 9.115-6.053 14.671 0 5.557 2.15 10.768 6.053 14.672L26.994 51.71l14.668-14.672c8.088-8.09 8.088-21.253 0-29.343zm-26.948 2.39C17.98 6.82 22.34 5.02 26.994 5.02c4.653 0 9.014 1.799 12.28 5.064 4.111 4.114 5.72 9.793 4.838 15.137a1.855 1.855 0 00-.35.348c-2.73 3.651-7.52 4.822-11.66 2.832-2.92-1.403-5.036-3.975-8.143-5.071-4.757-1.679-10.29-.582-13.881 2.887a17.672 17.672 0 01-.427-3.85c0-4.655 1.798-9.016 5.063-12.283zm24.56 24.564L26.994 46.93 14.714 34.65a17.247 17.247 0 01-3.385-4.791c2.5-3.206 6.475-4.546 10.455-3.649 3.547.8 5.857 3.842 9.076 5.314 3.743 1.713 7.657 1.534 10.975-.14a17.37 17.37 0 01-2.561 3.266z"
                                fill="#ffff"
                                stroke="#ffff"
                                stroke-width="1"
                                />
                            </svg>
                            <span class="font-semibold text-xl tracking-tight mt-4 font-bold">LAUNDROP</span>
                        </div>
                        <hr class="ml-20 w-64 mt-4">
                        <div class="flex items-center flex-shrink-0 text-white mr-6 ml-20 mt-4">
                            <p>Östermalmsgatan 26A <br> 114 26 Stockholm <br>Email:info@laundrop.se</p>
                        </div>
                    </div>
                    <div class="sm:w-1/4 h-auto sm:mt-0 mt-8 ml-20">
                        <div class="flex items-center flex-shrink-0 text-white mt-4 text-2xl font-bold">Hjälp</div>
                        <hr class="w-64 mt-3">
                        <ul class="list-reset leading-normal text-white">
                            <li class="hover:text-green-dark text-grey-darker">Kontakt</li>
                            <li class="hover:text-green-dark text-grey-darker">FAQ</li>
                            <li class="hover:text-green-dark text-grey-darker">Process</li>
                            <li class="hover:text-green-dark text-grey-darker">Villkor</li>
                        </ul>
                    </div>
                    <div class="sm:w-1/4 h-auto sm:mt-0 mt-8 ml-12">
                        <div class="flex items-center flex-shrink-0 text-white mt-4 text-2xl font-bold">Företag</div>
                        <hr class="w-64 mt-3">
                        <ul class="list-reset leading-normal text-white">
                            <li class="hover:text-green-dark text-grey-darker">Om Oss</li>
                            <li class="hover:text-green-dark text-grey-darker">Boka tvätt</li>
                            <li class="hover:text-green-dark text-grey-darker">Abonnemang</li>
                        </ul>
                    </div>

                    <div class="sm:w-1/4 h-auto sm:mt-0 mt-8 ml-12">
                        <div class="flex items-center flex-shrink-0 text-white mt-4 text-2xl font-bold">Newsletter</div>
                        <hr class="w-64 mt-3">
                        <p class="text-grey-darker leading-normal text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur. </p>
                            <div class="mt-4 flex">
                                <input type="text" class="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address">
                                <button class="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
                            </div>
                    </div>
                </div>
            </div>
        </footer>    
    </CustomizedLayout>
</template>

<script>
import CustomizedLayout from '~/layouts/Customized';
import Topic from "@/components/Topic";
import TextInput from "@/components/TextInput";

    export default {
        components: {
            CustomizedLayout,
            Topic,
            TextInput
        },
        data(){
            return{
                topic:'HUR DU RENGÖRER KLÄDER RÄTT',
                description: 'Culpa Lorem ea do elit enim reprehenderit duis dolore. Lorem exercitation consequat consequat' + 
                'incididunt nisi consectetur nulla ea id. Consectetur minim esse veniam velit id commodo amet dolor'+
                'voluptate non et do. Do ipsum eiusmod ex anim nulla duis. Duis eiusmod labore labore labore elit'+
                'do labore culpa culpa aliquip mollit est duis adipisicing.'+
                'Culpa Lorem ea do elit enim reprehenderit duis dolore. Lorem exercitation consequat consequat' + 
                'incididunt nisi consectetur nulla ea id. Consectetur minim esse veniam velit id commodo amet dolor'+
                'voluptate non et do. Do ipsum eiusmod ex anim nulla duis. Duis eiusmod labore labore labore elit'+
                'do labore culpa culpa aliquip mollit est duis adipisicing.'
            }
        }
        
    }
</script>

<style>
    .paragraph{
        padding-left: 533px; 
    }
    .marginTop{
        margin-top: 10px;
    }
</style>